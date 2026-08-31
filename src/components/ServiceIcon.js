import {
  FaHardHat,
  FaHome,
  FaThLarge,
  FaBorderAll,
  FaTint,
  FaWrench,
} from "react-icons/fa";

const ICONS = {
  "opere-murarie": FaHardHat,
  "rifacimento-tetti": FaHome,
  "pavimenti-rivestimenti": FaThLarge,
  cartongesso: FaBorderAll,
  impermeabilizzazione: FaTint,
  impiantistica: FaWrench,
};

export default function ServiceIcon({ slug, className = "w-6 h-6" }) {
  const Icon = ICONS[slug] || FaHardHat;
  return <Icon className={className} aria-hidden="true" />;
}
