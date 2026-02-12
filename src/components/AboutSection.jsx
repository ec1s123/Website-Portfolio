import { Code, Brain, Bot } from "lucide-react";

export const AboutSection  = () => {
    return ( <section id = "about" className = "py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className = "text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold"> 
                        My Story
                    </h3>
                        <p> 
                            I competed in Professional Esports for over 7 Years, in Counter-Strike and Valorant.
                            I have coached multiple teams to championships in National and International tournaments.
                            I have taught University style lectures at the Esports Academy on various topics including Team Dynamics, Strategy and In-Game Leadership.
                            
                        </p> 
                        <p>
                            After retiring from competitive gaming, I transitioned into software development, 
                            driven by my fascination with technology and problem-solving.

                        </p>

                        <p> 
                            When I'm not coding, you can find me at the gym, rock climbing,
                            gaming, or sharing my knowledge through content creation. 
                            I'm always willing to connect with like-minded individuals and collaborate on exciting projects.
                        </p>

                        <div className = "flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className = "cosmic-button">
                                Get in Touch
                            </a>

                            <a href="/Adam_Eccles_Resume.pdf" className = "px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colours duration-300">    
                             Download My CV
                             </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className = "gradient-border p-6 card-hover">
                            <div className = "flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">   
                                    <Code className = "h-6 w-6 text-primary" />
                                </div>
                                <div className = "text-left">
                                    <h4 className = "text-lg font-semibold">
                                        Back End Development
                                    </h4>
                                    <p className="muted-foreground">
                                        Creating robust and scalable back-end systems using Modern frameworks and best practices.
                                    </p>
                                 </div>
                            </div>
                        </div>
                        <div className = "gradient-border p-6 card-hover">
                            <div className = "flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">   
                                    <Brain className = "h-6 w-6 text-primary" />
                                </div>
                                <div className = "text-left">
                                    <h4 className = "text-lg font-semibold">
                                        Machine Learning
                                    </h4>
                                    <p className="muted-foreground">
                                        Building and deploying machine learning models to solve complex problems and drive data-driven decision making.
                                    </p>
                                 </div>
                            </div>
                        </div>
                        <div className = "gradient-border p-6 card-hover">
                            <div className = "flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">   
                                    <Bot className = "h-6 w-6 text-primary" />
                                </div>
                                <div className = "text-left">
                                    <h4 className = "text-lg font-semibold">
                                        Artificial Intelligence
                                    </h4>
                                    <p className="muted-foreground">
                                            Creating robust and scalable Agentic AI systems using modern frameworks and best practices.
                                        </p>
                                    </div>
                                </div>
                        </div>
                    </div>
                
            </div>
        </div>
    </section>
    );
};