export function calculateMaterials(system, sqFeet) {
  const s = parseFloat(sqFeet);

  switch (system) {
    case "MR":
      return {
        primer: Math.ceil(s * 0.15),
        basecoat: Math.ceil(s * 0.75),
        topcoat: Math.ceil(s * 1.25),
      };

    case "Fabric":
      return {
        primer: Math.ceil(s * 0.15),
        basecoat: Math.ceil(s * 1.5),
        topcoat: Math.ceil(s * 1.5),
        fabric: Math.ceil(s * 1),
      };

    case "Flexion":
      return {
        membrane: Math.ceil(s * 1.1),
        adhesive: Math.ceil(s * 0.6),
        fasteners: Math.ceil(s * 12),
      };

    case "Membrane":
      return {
        cleaner: Math.ceil(s * 0.1),
        basecoat: Math.ceil(s * 1),
        topcoat: Math.ceil(s * 1.25),
      };

    case "Foam":
      return {
        foam: Math.ceil(s * 0.25),
        basecoat: Math.ceil(s * 1),
        topcoat: Math.ceil(s * 1.25),
      };

    default:
      return {};
  }
}

