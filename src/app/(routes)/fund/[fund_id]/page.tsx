export default function Page({ params }: { params: { fund_id: string } }) {
  return (
    <>
      <h1>fund {`[${params.fund_id}]`}</h1>
    </>
  )
}
