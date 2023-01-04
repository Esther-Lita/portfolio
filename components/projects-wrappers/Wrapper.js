export default function wrapper(props) {
 
    
  return (
    <div className="relative max-w-lg p-4 mx-5 my-5 bg-white border-transparent shadow-md rounded-2xl lg:my-12 group hover:shadow-xl hover:shadow-gray-500 hover:border-gray-300 hover:border-b hover:cursor-pointer ">
      {props.children}
    </div>
  );
  
}


