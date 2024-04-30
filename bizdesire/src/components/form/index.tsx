import React, { useState } from "react";
import { Formik, Field, Form, FormikHelpers } from 'formik';

interface Values {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
    residentArea: string;
    street1: string;
    street2: string;
    permanentAddress: boolean;
    documents: {
        fileName: string;
        fileType: string;
    }[];
}

const UserForm: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setSelectedFile(file);
            // Handle file upload logic here
        }
    };
    return (
        <>
            <div>
                <h1>Signup</h1>
                <Formik
                    initialValues ={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        dateOfBirth: '',
                        street1: '',
                        street2: '',
                        permanentAddress: false,
                        documents: [],
                    }}
                    onSubmit={(
                        values: Values,
                        { setSubmitting }: FormikHelpers<Values>
                    ) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 500);
                    }}
                >
                    <Form >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label className="flex align-start font-bold" htmlFor="firstName">First Name</label>
                                <Field className="border-2 p-2" id="firstName" name="firstName" placeholder="Enter your first name here." />
                            </div>

                            <div className="flex flex-col">
                                <label className="flex align-start font-bold" htmlFor="lastName">Last Name</label>
                                <Field className="border-2 p-2" id="lastName" name="lastName" placeholder="Enter your last name here." />
                            </div>

                            <div className="flex flex-col">
                                <label className="flex align-start font-bold" htmlFor="email">Email</label>
                                <Field
                                    className="border-2 p-2"
                                    id="email"
                                    name="email"
                                    placeholder="myname@example.com"
                                    type="email"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="flex align-start font-bold" htmlFor="dateOfBirth">Date of Birth</label>
                                <Field
                                    className="border-2 p-2"
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    placeholder="YYYY-MM-DD"
                                    type="date"
                                />
                            </div>
                        </div>


                        <h1 className="flex align-start mt-6 font-bold">Resident area</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label className="flex align-start" htmlFor="street1">Street 1</label>
                                <Field className="border-2 p-2" id="street1" name="street1" placeholder="Enter your street address (line 1)." />
                            </div>
                            <div className="flex flex-col">
                                <label className="flex align-start" htmlFor="street2">Street 2</label>
                                <Field className="border-2 p-2" id="street2" name="street2" placeholder="Enter your street address (line 2)." />
                            </div>
                        </div>

                        <div className="flex gap-4 mt-8">
                            <Field className="border-2 p-2" id="permanentAddress" name="permanentAddress" type="checkbox" />
                            <label className="flex align-start" htmlFor="permanentAddress">Same as Residential area</label>
                        </div>

                        <h1 className="flex align-start font-bold mt-4">Permanent Address</h1>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label className="flex align-start" htmlFor="street1">Street 1</label>
                                <Field className="border-2 p-2" id="street1" name="street1" placeholder="Enter your street address (line 1)." />
                            </div>
                            <div className="flex flex-col">
                                <label className="flex align-start" htmlFor="street2">Street 2</label>
                                <Field className="border-2 p-2" id="street2" name="street2" placeholder="Enter your street address (line 2)." />
                            </div>
                        </div>

                        <h1 className="flex align-start font-bold mt-4">Upload Documents</h1>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="flex flex-col">
                                <label className="flex align-start" htmlFor="fileName">File Name</label>
                                <Field className="border-2 p-2" id="fileName" name="documents.fileName" placeholder="Enter file name" />
                            </div>
                            <div className="flex flex-col">
                                <label className="flex align-start" htmlFor="fileType">Type of File</label>
                                <Field as="select" className="border-2 p-2" id="fileType" name="documents.fileType" placeholder="Select file type">
                                    <option value="">Select file type</option>
                                    <option value="PDF">PDF</option>
                                    <option value="Word">Word</option>
                                    <option value="Image">Image</option>
                                </Field>
                            </div>
                            <div className="flex flex-col">
                                <label className="flex align-start">Upload Document</label>
                                <div className="border-2 p-2 flex justify-between items-center">
                                    <span>{selectedFile ? selectedFile.name : "No file chosen"}</span>
                                    <label htmlFor="uploadFile" className="ml-2 cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            />
                                        </svg>
                                    </label>
                                    <input
                                        id="uploadFile"
                                        name="uploadFile"
                                        type="file"
                                        className="hidden"
                                        onChange={handleFileChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="flex flex-col">
                                <label className="flex align-start" htmlFor="fileName">File Name</label>
                                <Field className="border-2 p-2" id="fileName" name="documents.fileName" placeholder="Enter file name" />
                            </div>
                            <div className="flex flex-col">
                                <label className="flex align-start" htmlFor="fileType">Type of File</label>
                                <Field as="select" className="border-2 p-2" id="fileType" name="documents.fileType" placeholder="Select file type">
                                    <option value="">Select file type</option>
                                    <option value="PDF">PDF</option>
                                    <option value="Word">Word</option>
                                    <option value="Image">Image</option>
                                </Field>
                            </div>
                            <div className="flex flex-col">
                                <label className="flex align-start">Upload Document</label>
                                <div className="border-2 p-2 flex justify-between items-center">
                                    <span>{selectedFile ? selectedFile.name : "No file chosen"}</span>
                                    <label htmlFor="uploadFile" className="ml-2 cursor-pointer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            />
                                        </svg>
                                    </label>
                                    <input
                                        id="uploadFile"
                                        name="uploadFile"
                                        type="file"
                                        className="hidden"
                                        onChange={handleFileChange}
                                    />
                                </div>
                            </div>
                        </div>


                        <button className="p-4 bg-black text-white m-8 text-xl" type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        </>
    );
};

export default UserForm;
