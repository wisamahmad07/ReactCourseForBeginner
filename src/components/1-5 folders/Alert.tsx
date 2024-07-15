interface Props {
  onClose: () => void;
}

const Alert = ({ onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible fade show">
      Alert
      <button type="button" className="btn-close" onClick={onClose}></button>
    </div>
  );
};

export default Alert;
