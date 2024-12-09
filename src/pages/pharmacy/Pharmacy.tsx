import React, { useEffect, useState } from "react";

import Layout from "../layout/Layout";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

import { Check, Copy, Ellipsis, Hospital, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import AddPharmacy from "./AddPharmacy";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchPharmacies } from "@/store/slices/pharmacySlice";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import Warning from "./Warning";
import { Link, useNavigate } from "react-router-dom";
import PharmacyLoading from "./PharmacyLoading";


const Pharmacy = () => {
  const [copied, setCopied] = useState([])
  const [open, setOpen] = useState(false);
  const [state, setState] = useState("");
  const [id, setId] = useState("");
  const { toast } = useToast();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const pharmacies = useSelector((state: RootState) => state.pharmacy.pharmacies);
  const loading = useSelector((state: RootState) => state.pharmacy.loading);

  useEffect(() => {
    dispatch(fetchPharmacies())
  }, [])

  const status = {
    ACTIVE: "default",
    INACTIVE: "destructive",
    SUSPENDED: "secondary"
  }

  const handleCopy = async (id) => {
    try {
      await navigator.clipboard.writeText(id);
      setCopied((prev) => (
        [...copied,
          id,
        ]
      ));
      toast({
        title: "Clipboard",
        description: "Copied to clipboard"
      })
      setTimeout(() => setCopied(prevItems => prevItems.filter(item => item !== id)), 2000);
    } catch (err) {
      toast({
        title: "Error while copying",
        description: err,
        variant: "destructive"
      })
    }
  }

  const handleChangeStatus = (id: string, st: string) => {
    setId(prev => id);
    setState(prev => st)
    setOpen(prev => !prev)
  }

  const handleNavigationClick = (e:any, id:string) => {
    
    navigate(`/pharmacy/${id}/overview/employee`)
  }
  return (
    <>
      <Warning open={open} setOpen={setOpen} id={id} status={state} />
      <Layout>
      {loading ? (
          <PharmacyLoading />
        ) : (
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
        >
          {pharmacies.map((pharmacy) => (
     
            <li
              key={pharmacy.id}
              className="overflow-hidden rounded-xl border border-gray-200 cursor-pointer"
              onClick={(e) => handleNavigationClick(e, pharmacy.id)}
            >
              <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6" onClick={(e) => e.stopPropagation()} >
                <Hospital className="h-12 w-12 flex-none rounded-lg  object-cover text-destructive" />
                <div className="text-sm font-medium leading-6 flex flex-col text-gray-900">
                  <p>{pharmacy.pharmacyName}</p>
                  <div className="text-[10px] flex gap-x-[2px] items-start justify-start">
                    <p className="text-gray-900">{pharmacy.id}</p>
                    <div className="!h-fit !w-auto flex justify-center items-center cursor-pointer" onClick={() => { handleCopy(pharmacy.id) }}>
                      {
                        !copied.includes(pharmacy.id) && <Copy className="h-[15px] w-[15px]" />
                      }

                      {
                        copied.includes(pharmacy.id) && <Check className="h-[15px] w-[15px]" />
                      }

                    </div>
                  </div>
                </div>
                <Menu as="div" className="relative ml-auto" >
                  <MenuButton className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Open options</span>
                    <Ellipsis className="h-5 w-5" aria-hidden="true" />
                  </MenuButton>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      <MenuItem>
                        {({ focus }) => (
                          <div
                            className={cn(
                              focus ? "bg-gray-50" : "",
                              "block px-3 py-1 text-sm leading-6 text-gray-900 cursor-pointer"
                            )}
                          >
                            Edit<span className="sr-only">, {pharmacy.pharmacyName}</span>
                          </div>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <div
                          onClick={() => handleChangeStatus(pharmacy.id, "Terminate")}
                            className={cn(
                              focus ? "bg-gray-50" : "",
                              "block px-3 py-1 text-sm leading-6 text-gray-900 cursor-pointer"
                            )}
                          >
                            Terminate
                            <span className="sr-only">, {pharmacy.pharmacyName}</span>
                          </div>
                        )}
                      </MenuItem>
                      {
                        pharmacy.status === "ACTIVE" && (<MenuItem>
                          {({ focus }) => (
                            <div
                              onClick={() => handleChangeStatus(pharmacy.id, "Deactivate")}
                              className={cn(
                                focus ? "bg-gray-50" : "",
                                "block px-3 py-1 text-sm leading-6 text-gray-900 cursor-pointer"
                              )}
                            >
                              <p>Deactivate</p>

                              <span className="sr-only">, {pharmacy.pharmacyName}</span>
                            </div>
                          )}
                        </MenuItem>)
                      }
                      {pharmacy.status === "INACTIVE" && (<MenuItem>
                        {({ focus }) => (
                          <div
                            onClick={() => handleChangeStatus(pharmacy.id, "Activate")}
                            className={cn(
                              focus ? "bg-gray-50" : "",
                              "block px-3 py-1 text-sm leading-6 text-gray-900"
                            )}
                          >
                            <p>Activate</p>

                            <span className="sr-only">, {pharmacy.pharmacyName}</span>
                          </div>
                        )}
                      </MenuItem>)}
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
              <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                <div className="flex justify-between gap-x-4 py-3">
                  <dt className="text-gray-500">Located at</dt>
                  <dd className="text-gray-700">
                    <p>{pharmacy.pharmacyAddress}</p>
                  </dd>
                </div>

                <div className="flex justify-between gap-x-4 py-3">
                  <dt className="text-gray-500">Status</dt>
                  <dd className="flex items-start gap-x-2">
                    <div className="font-medium text-gray-900">
                      <Badge variant={status[pharmacy.status]}>{pharmacy.status}</Badge>
                    </div>
                  </dd>
                </div>
              </dl>
            </li>
           
          ))}
          <li>
            <AddPharmacy />
          </li>
        </ul>)};
      </Layout>
    </>
  );
};

export default Pharmacy;
