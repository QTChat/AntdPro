import { getTickets, updateTicket as updateTicketReq } from '@/services/tickets';
import { useState } from 'react';
import { useRequest } from 'umi';

export default function TicketsModal() {

  const [ticketList, setTicketList] = useState<API.TicketsData[]>([])

  const { loading } = useRequest(getTickets, {
    onSuccess: (data) => {
      setTicketList(data.leave_messages)
    }
  });

  const { loading: updateLoading, run: updateTicket } = useRequest(updateTicketReq, {
    manual: true,
    onSuccess: (data, [id, status]) => {
      if(data.success){
        setTicketList(ticketList.map(item => {
          if(item.id===id) item.status=status
          return item
        }))
      }
    }
  })

  return {
    ticketList,
    loading,
    updateTicket,
    updateLoading
  };
}