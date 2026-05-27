import { iconBrandColors, type ColorIconProps } from "../../utils/iconColors";

const ColorIcon = ({
  icon: Icon,
  brand,
  className = "",
  size,
  strokeWidth = 2,
}: ColorIconProps) => (
  <Icon
    className={className}
    size={size}
    strokeWidth={strokeWidth}
    style={{ color: iconBrandColors[brand] }}
    aria-hidden
  />
);

export default ColorIcon;
