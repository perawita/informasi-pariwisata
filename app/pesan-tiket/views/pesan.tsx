"use client";

import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";

import invoice_id_generator from "@/lib/invoice_id";
import useSnaps from "../components/hooks/snap";

export function Pesan() {

    const { snapEmbed } = useSnaps();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const parameter = {
            id_payment: invoice_id_generator(),
            amount: process.env.NEXT_PUBLIC_AMOUNT_PRICE,
            first_name: firstName,
            last_name: lastName,
            phone: phone
        };

        try {
            const response = await fetch(`/api/request-token/`,
                {
                    method: 'POST',
                    body: JSON.stringify(parameter),
                    headers: {
                        'content-type': 'application/json'
                    }
                });

            const data = await response.json();
            snapEmbed(data.token, {
                onSuccess: handleSnapAction,
                onPending: handleSnapAction,
                onError: handleSnapAction,
                onClose: handleCloseAction
            });

        } catch (error: any) {
            console.error('There was a problem with the fetch operation:', error.message);
        }
    };

    const handleSnapAction = () => {
        alert('Succes')
    }

    const handleCloseAction = () => {
        alert('error')
    }


    return (
        <section id="pesan">

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
                    <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                        Welcome to Aceternity
                    </h2>
                    <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                        Login to aceternity if you can because we don&apos;t have a login flow
                        yet
                    </p>

                    <form className="my-8" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                            <LabelInputContainer>
                                <Label htmlFor="firstname">First name</Label>
                                <Input id="firstname" placeholder="Tyler" type="text" onChange={(e) => setFirstName(e.target.value)} required />
                            </LabelInputContainer>
                            <LabelInputContainer>
                                <Label htmlFor="lastname">Last name</Label>
                                <Input id="lastname" placeholder="Durden" type="text" onChange={(e) => setLastName(e.target.value)} required />
                            </LabelInputContainer>
                        </div>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="wa">Nomor Whatsapp</Label>
                            <Input id="wa" placeholder="08983220" type="number" onChange={(e) => setPhone(e.target.value)} required />
                        </LabelInputContainer>

                        {/* <LabelInputContainer className="mb-4">
                            <Label htmlFor="date">Tanggal</Label>
                            <Input id="date" type="date"  onChange={(e) => setDate(e.target.value)} required />
                        </LabelInputContainer> */}

                        <button
                            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                            type="submit"
                        >
                            Pesan &rarr;
                            <BottomGradient />
                        </button>

                        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                    </form>
                </div>
            </div>
        </section>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
