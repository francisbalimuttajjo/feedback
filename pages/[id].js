import React from "react";
import {useRouter} from 'next/router'
import Feedback from '../components/Feedback'

function feedback() {
  const router = useRouter()
  console.log((router.query.id))
  return (
    <>
      <Feedback />
    </>
  );
}

export default feedback;
