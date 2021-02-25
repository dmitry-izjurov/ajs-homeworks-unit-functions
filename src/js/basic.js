export default function getHealth(unitLevel) {
  if (unitLevel.health > 50 && unitLevel.health <= 100) return 'healthy';
  if (unitLevel.health >= 15 && unitLevel.health <= 50) return 'wounded';
  if (unitLevel.health > 0 && unitLevel.health < 15) return 'critical';
  return null;
}
