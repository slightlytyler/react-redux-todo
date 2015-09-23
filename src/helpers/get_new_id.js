export default function(listState) {
  listState.reduce((maxId, item) => Math.max(item.get('id'), maxId), -1) + 1
}