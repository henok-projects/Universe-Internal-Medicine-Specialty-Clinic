import { Button } from '@/components/ui/button'
import Modal from '@/components/ui/modal'
import { activatePharmacy, deactivatePharmacy, terminatePharmacy } from '@/store/slices/pharmacySlice'
import { AppDispatch } from '@/store/store'
import { TriangleAlert } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'


interface Props {
    open: boolean,
    setOpen: any,
    id: string,
    status: string
}


const Warning: React.FC<Props> = ({ open, setOpen, id, status }) => {

    const dispatch = useDispatch<AppDispatch>()

    const actions = {
        Activate:  () => {
            dispatch(activatePharmacy(id));
            setOpen(false);
        },
        Deactivate: () => {
            dispatch(deactivatePharmacy(id));
            setOpen(false);
        }, 
        Terminate: () => {
            dispatch(terminatePharmacy(id));
            setOpen(false);
        }
    }
    return (
        <Modal open={open} setOpen={setOpen} title="Pharmacy status" icon={<TriangleAlert className='text-destructive' />} buttons={[
            <Button onClick={() => actions[status]() } variant='default'>

                Confirm
            </Button>,
            <Button
                onClick={() => setOpen(false)}
                variant='destructive'
            >
                Cancel
            </Button>,


        ]} >
            Are you sure you want to {status} your pharmacy?
        </Modal>
    )
}

export default Warning