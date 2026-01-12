import { useEffect, useState } from "react";

export default function LogoImage() {
  const [logoUrl, setLogoUrl] = useState("");

  useEffect(() => {
    // Preload the logo
    const img = new Image();
    img.src = "/logo.png";
  }, []);

  return (
    <img
      src="/logo.png"
      alt="SAK Fasteners Logo"
      className="h-12 w-12 object-contain"
      width={48}
      height={48}
    />
  );
}
