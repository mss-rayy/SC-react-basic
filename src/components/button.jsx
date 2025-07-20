export default function Button(props) {
  console.log(props);

  return (
    <button
      className={`bg-blue-600 text-white px-2.5 py-2 rounded-md mr-2 ${props.style}`}
    >
      {props.title || "Default"}
    </button>
  );
}

export function Profile({ src, alt }) {
  return <img src={src} alt={alt} />;
}

// background-color
