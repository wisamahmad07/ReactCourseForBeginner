import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "name must be 3 chars" }),
  age: z.number({ invalid_type_error: "give > 18" }).min(18),
});
type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const formSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <form className="p-3" onSubmit={handleSubmit(formSubmit)}>
      <div className="mb-3">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          {...register("age", { valueAsNumber: true })}
        />
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      <button type="submit" className="btn btn-primary" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};

export default Form;
