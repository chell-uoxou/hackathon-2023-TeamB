export default function Page({ params }: { params: { entry_id: string } }) {
  return (
    <>
      <h1>entry {`[${params.entry_id}]`}</h1>
    </>
  )
}
