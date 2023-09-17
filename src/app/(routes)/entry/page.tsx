'use client'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore/lite'
import { db } from '@/app/_utils/firebase'
import { getEntriesByCommunity as getEntriesByCommunityId } from '@/app/_stores/firestore/community_collections/entries'
import { getCommunities } from '@/app/_stores/firestore/communities'

export default function Page() {
  const [entries, setEntries] = useState<any[]>([])

  useEffect(() => {
    const fetchEntries = async () => {
      const entriesSnapshot = await getEntriesByCommunityId(
        'LWbEcWCltdvB2q0VFGx2',
      )
      const entriesList = entriesSnapshot.docs.map((doc) => doc.data())
      setEntries(entriesList)
    }

    fetchEntries()
  }, [])

  const formatYen = (yen: number) => {
    const result = yen.toLocaleString('ja-JP', {
      style: 'currency',
      currency: 'JPY',
    })
    return result
  }

  return (
    <TableContainer>
      <Table variant="simple">
        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
        <Thead>
          <Tr>
            <Th>品目</Th>
            <Th>メンバー</Th>
            <Th isNumeric>合計金額</Th>
          </Tr>
        </Thead>
        <Tbody>
          {entries.map((entry, index) => (
            <Tr key={index}>
              <Td>{entry.displayName}</Td>
              <Td>{entry.fundingMembers.length}</Td>{' '}
              {/* fundingMembersは配列なので、その長さを表示します */}
              <Td isNumeric>{formatYen(entry.totalPrice)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
