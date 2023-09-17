import { db } from '@/app/_utils/firebase'
import { collection, getDocs } from 'firebase/firestore'

export const communitiesRef = collection(db, 'communities')

export const getCommunities = async () => {
  const snapshot = await getDocs(communitiesRef)
  return snapshot
}

export const getCommunity = (communityId: string) => {
  return collection(db, 'communities', communityId)
}
