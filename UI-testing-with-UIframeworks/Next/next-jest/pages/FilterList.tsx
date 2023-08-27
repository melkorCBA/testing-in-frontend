

export type FilterProps = {
    items: any[],
    filterStr: string,
    onFilterChange: ($event: any) => void,
    selectedItems: any[],
    onItemSelection: ($event: any) => void

}

// should filter out items based on the filter string
// should add selected items to selected item list
// should remove selected item from selected list if selected again
const FilterList = ({ items, filterStr, onFilterChange, selectedItems, onItemSelection }: FilterProps
) => {
    return (<></>)
}

export { FilterList }