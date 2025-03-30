const Alert = (props) => {
  return (
    <div className={`alert alert-${props.alert_type}`} role="alert">
      {props.children}
    </div>
  );
};

export default Alert;
