export const useProduct = async (productSlug: string) => {
  // const { data, error } = await useFetch(
  //   `/api/store/external-data/${productId}`)
  const config = useRuntimeConfig()
  const url = config.public.BACKEND_URL
  const { data: product, error } = await useFetch(
    url + '/products/' + productSlug + '?by=slug',
  )

  /* The above useFetch is a syntactic sugar of the below useAsyncData & $fetch combo */
  // const { data, error } = await useAsyncData('product', async () => {
  //   return await $fetch(`/api/store/local-data/${productId}`)
  // })

  if (error.value) {
    console.error(productSlug)
    throw createError({
      ...error.value,
      statusMessage: `Couldn't fetch product id ${productSlug}.`,
    })
  }

  return { product }
}
