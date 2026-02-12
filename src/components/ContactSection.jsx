import { LinkedinIcon, Mail, MapPin } from "lucide-react";

export const ContactSection = () => {
    return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30"> 
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get in <span className="text-primary"> Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                I'm always open to new opportunities and collaborations. Whether you have a question, want to work together, or just want to say hi, feel free to reach out!
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
                <div className="flex flex-col items-center text-center gap-3">
                    <div className="h-12 w-12 flex items-center justify-center p-3 rounded-full bg-primary/10">
                        <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">Contact Me</h3>
                    <a
                    href="mailto:adameccles2000@gmail.com"
                    className="text-lg text-primary hover:underline transition-colors duration-300 break-all"
                    >
                    adameccles2000@gmail.com
                    </a>
                </div>

                <div className="flex flex-col items-center text-center gap-3">
                    <div className="h-12 w-12 flex items-center justify-center p-3 rounded-full bg-primary/10">
                        <LinkedinIcon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">LinkedIn</h3>
                    <a
                    href="https://www.linkedin.com/in/adam-eccles-616b1427b/"
                    className="text-lg text-primary hover:underline transition-colors duration-300 break-all"
                    >
                    linkedin.com/in/adam-eccles
                    </a>
                </div>

                <div className="flex flex-col items-center text-center gap-3">
                    <div className="h-12 w-12 flex items-center justify-center p-3 rounded-full bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">Location</h3>
                    <p className="text-lg text-primary">St. Louis, Missouri, USA</p>
                </div>
            </div>
        </div>
       </section>
    ); 
};  
