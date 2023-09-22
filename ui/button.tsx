interface IProps {
  content: string;
  clazz: string;
  onClick: () => void;
}

const Button: React.FC<IProps> = ({content, clazz, onClick}) => {

  return (
    <button className={`button ${clazz}`}>
      {content}
    </button>
  )
}

export default Button;