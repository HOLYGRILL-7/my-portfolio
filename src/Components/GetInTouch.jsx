import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqpakvre";

const GetInTouch = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | submitting | success | error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormData({ name: "", email: "", message: "" });
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <div className="bg-cream py-16 sm:py-20 md:py-10 px-4 sm:px-6 md:px-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
                {/* Left column */}
                <div className="space-y-2">
                    <h1 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-gray5900">
                        Got a project in mind? <span className="text-terracotta">Let's talk about it.</span>
                    </h1>

                    <p className="text-lg text-gray-600 max-w-md">
                        I'm open to freelance work, collaboration, or just a good conversation about what you're
                        building. Use the form to tell me what's on your mind.
                    </p>

                    <div className="space-y-3 pt-4">
                        <div className="border-b-gray-300 border-b p-2">
                            <p className="text-xs font-medium uppercase tracking-wider text-gray-900 mb-1">LinkedIn</p>
                            <a
                                href="https://www.linkedin.com/in/praise-jones-oduro-65a47a253/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-medium text-gray-500 hover:text-terracotta transition-colors duration-200"
                            >
                                praise-jones-oduro
                            </a>
                        </div>

                        <div className="border-b-gray-300 border-b p-2">
                            <p className="text-xs font-medium uppercase tracking-wider text-gray-900 mb-1">GitHub</p>
                            <a
                                href="https://github.com/HOLYGRILL-7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-medium text-gray-500 hover:text-terracotta transition-colors duration-200"
                            >
                                HOLYGRILL-7
                            </a>
                        </div>

                        <div className=" p-2">
                            <p className="text-xs font-medium uppercase tracking-wider text-gray-900 mb-1">Email</p>
                            <a
                                href="mailto:bismarkjonesoduro@gmail.com"
                                className="text-lg font-medium text-gray-500 hover:text-terracotta transition-colors duration-200"
                            >
                                bismarkjonesoduro@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right column: contact form */}
                <div>
                    {status === "success" ? (
                        <div className="mt-4 bg-white border border-terracotta/30 rounded-lg px-6 py-10 text-center">
                            <p className="text-lg font-medium text-gray-900">
                                Thanks — I'll get back to you soon.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                            {status === "error" && (
                                <p className="text-sm font-medium text-red-600">
                                    Something went wrong sending your message. Please try again,
                                    or email me directly at{" "}
                                    <a
                                        href="mailto:bismarkjonesoduro@gmail.com"
                                        className="underline"
                                    >
                                        bismarkjonesoduro@gmail.com
                                    </a>
                                    .
                                </p>
                            )}

                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-xs font-medium uppercase tracking-wider text-gray-500 mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className="w-full bg-gray-100/50 border border-gray-300 rounded-lg px-4 py-3 text-gray5900 placeholder-gray-400 focus:outline-none focus:border-terracotta transition-colors duration-200"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-xs font-medium uppercase tracking-wider text-gray-500 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    className="w-full bg-gray-100/50 border border-gray-300 rounded-lg px-4 py-3 text-gray5900 placeholder-gray-400 focus:outline-none focus:border-terracotta transition-colors duration-200"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-xs font-medium uppercase tracking-wider text-gray-500 mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="What are you building, or what would you like to talk about?"
                                    className="w-full bg-gray-100/50 border border-gray-300 rounded-lg px-4 py-3 text-gray5900 placeholder-gray-400 focus:outline-none focus:border-terracotta transition-colors duration-200 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 font-medium uppercase tracking-wider bg-transparent border-2 border-terracotta text-terracotta px-6 py-3 rounded-lg hover:bg-terracotta hover:text-white transition-all duration-300 ease-in-out"
                            >
                                {status === "submitting" ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;
