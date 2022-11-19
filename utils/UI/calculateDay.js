export default function calculateDate(dateB) {
  const diff = new Date(new Date() - new Date(dateB));
  const diffDay = diff.getDay();
  if (diffDay >= 1) return `${diffDay}d`;
  if (diffDay < 1) return `${diff.getHours()}h`;
}
