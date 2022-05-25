export const generateQuery = (filterObject) => {
    return Object.entries(filterObject).reduce((query, [field, value]) => {
        query += `${field}=${value}&`
        return query
     }, "")
}