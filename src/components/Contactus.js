var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => (Object.assign(Object.assign({}, prevData), { [name]: value })));
    };
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        try {
            // Simulate API call
            yield new Promise((resolve) => setTimeout(resolve, 1500));
            console.log('Form Data Submitted:', formData);
            setFormData({ name: '', email: '', message: '' });
            setSubmitStatus('Message sent successfully!');
        }
        catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('Something went wrong. Please try again.');
        }
        finally {
            setIsSubmitting(false);
        }
    });
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-8", id: "GetInTouch", children: _jsxs("section", { className: "w-full max-w-7xl px-4 sm:px-6 lg:px-12 py-12 bg-white rounded-lg shadow-lg", children: [_jsx("h1", { className: "text-3xl font-bold text-center text-gray-800 mb-6", children: "Get in Touch" }), _jsx("p", { className: "text-center text-gray-600 mb-8", children: "We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible." }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6 max-w-3xl mx-auto", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700", children: "Full Name" }), _jsx("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleChange, required: true, className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm", placeholder: "John Doe" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700", children: "Email Address" }), _jsx("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleChange, required: true, className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm", placeholder: "john.doe@example.com" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-700", children: "Your Message" }), _jsx("textarea", { id: "message", name: "message", value: formData.message, onChange: handleChange, required: true, rows: 4, className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm", placeholder: "Write your message here..." })] }), _jsx("button", { type: "submit", disabled: isSubmitting, className: `w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${isSubmitting
                                ? 'bg-indigo-400 cursor-not-allowed'
                                : 'bg-[#101828] hover:bg-[#101828]'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#101828]`, children: isSubmitting ? 'Sending...' : 'Send Message' }), submitStatus && (_jsx("p", { className: `text-center text-sm ${submitStatus.includes('success') ? 'text-green-600' : 'text-red-600'}`, children: submitStatus }))] })] }) }));
};
export default ContactForm;
