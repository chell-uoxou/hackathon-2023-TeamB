import { collection, doc, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '@/app/_utils/firebase'

export const getEntriesByCommunity = async (communityId: string) => {
  const entriesRef = collection(db, 'communities', communityId, 'entries')
  const querySnapshot = await getDocs(entriesRef)
  return querySnapshot
}
