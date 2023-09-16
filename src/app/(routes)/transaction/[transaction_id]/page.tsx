export default function Page({
  params,
}: {
  params: { transaction_id: string }
}) {
  return (
    <>
      <h1>transaction {`[${params.transaction_id}]`}</h1>
    </>
  )
}
