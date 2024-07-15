import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { categories } from "../../App";

interface Props {
  formSubmit: (data: FormData) => void;
}

const schema = z.object({
  Description: z
    .string()
    .min(3, { message: "Description must be 3 characters" }),
  Amount: z.number({
    message: "Enter any Amount",
  }),
  Category: z.string().min(1, { message: "Select any category" }),
});

type FormData = z.infer<typeof schema>;

const ExpenseForm = ({ formSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form className="p-4" onSubmit={handleSubmit(formSubmit)}>
      <div className="mb-3">
        <label htmlFor="Description" className="d-block">
          Description
        </label>
        <textarea
          className="form-control"
          id="Description"
          {...register("Description")}
        ></textarea>
        {errors.Description && (
          <p className="text-danger">{errors.Description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="Amount" className="d-block">
          Amount
        </label>
        <input
          type="number"
          id="Amount"
          className="form-control"
          {...register("Amount", { valueAsNumber: true })}
        />
        {errors.Amount && (
          <p className="text-danger">{errors.Amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="Category" className="d-block">
          Category
        </label>
        <select
          id="Category"
          className="form-select"
          {...register("Category")}
          defaultValue=""
        >
          <option value="" disabled>
            Select an option
          </option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.Category && (
          <p className="text-danger">{errors.Category.message}</p>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
