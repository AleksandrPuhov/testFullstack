type SortItem = {
  id: string;
  name: string;
  parentId: string | null;
};

/**
 * Сортировка элементов по имени
 */
const hierarchySortFunc = <T extends SortItem>(a: T, b: T) =>
  a.name > b.name ? 1 : -1;

/**
 * Рекурсивная функция для сортировки иерархии
 */
const hierarchySort = <T extends SortItem>(
  hashArr: Record<string, T[]>,
  key: string
): T[] => {
  const children = hashArr[key];
  if (!children) return [];

  // Отсортировать дочерние элементы
  const sortedChildren = children.sort(hierarchySortFunc);

  // Получить отсортированных потомков для каждого дочернего элемента
  return sortedChildren.reduce((acc, child) => {
    return [...acc, child, ...hierarchySort(hashArr, child.id)];
  }, [] as T[]);
};

export const sortItems = <T extends SortItem>(items: T[]) => {
  const hashArr: Record<string, T[]> = {};

  // Сгруппировать элементы по parentId
  items.forEach((item) => {
    if (!hashArr[item.parentId ?? "0"]) {
      hashArr[item.parentId ?? "0"] = [];
    }
    hashArr[item.parentId ?? "0"]?.push(item);
  });

  return hierarchySort(hashArr, "0");
};
