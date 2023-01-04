export default function InfoWrapper(props) {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white transition-all duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-80 rounded-b-2xl">
      {props.children}
    </div>
  );
}
