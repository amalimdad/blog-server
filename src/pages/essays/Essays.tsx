import { useState } from "react"
import { useNavigate } from "react-router-dom"
import messages from "../../assets/local/messages"
import Card from "../../components/shared/card/Card"
import { CardDetailsInterface } from "../../components/shared/card/CardDetails"
import EmptyState from "../../components/shared/empty-state/EmptyState"

const Essays = () => {
  let navigate = useNavigate();
  let [essays, setEssays] = useState([])

  return (
    <>
      {
        essays.length === 0
          ? <EmptyState label={messages.ar.emptyState} />
          : <div className='m-16 md:m-22 lg:m-40 '>
            <h3 className='text-center text-2xl md:text-3xl'> {messages.ar.essays.essays}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-20 my-20 md:my-40">
              {
                essays.map((essay: CardDetailsInterface) =>
                  <Card data={essay} isJustifyHight={true} callbackFunc={() => {
                    navigate(`/reports/${essay.id}`, { replace: true });
                  }} />)
              }
            </div>
          </div>
      }

    </>
  )

}

export default Essays
