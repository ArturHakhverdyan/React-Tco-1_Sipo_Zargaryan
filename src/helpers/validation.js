  export const IsRequired = (value) => {
 return value.length ? undefined : "The field must be is required "
 }
  
const MinLength = (length) => (value) => {
    return value.length >= length ? undefined : ` Min length must be ${length}`
}
export  const MinLength3 = MinLength(3);

const MaxLength = (length) => (value) => {
    return value.length <= length ? undefined:` Max length must be ${length}`
}
export const MaxLength20 = MaxLength(20)
export const MaxLength500 = MaxLength(500)