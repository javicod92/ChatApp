// IconGallery.tsx
import * as Icons from "./components/ui/Icons";
console.log(Object.entries(Icons));

const IconGallery = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "16px",
    }}
  >
    {Object.entries(Icons).map(([name, Icon]) => (
      <div
        key={name}
        style={{
          textAlign: "center",
          border: "solid 1px gray",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <Icon />
        <p>{name}</p>
      </div>
    ))}
  </div>
);

export default IconGallery;
