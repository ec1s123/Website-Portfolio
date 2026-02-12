import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Siamese Neural Network for one shot image recognition",
        description: "Developed a Siamese Neural Network using TensorFlow and Keras to perform one-shot image recognition tasks. The model was trained on a custom dataset and achieved high accuracy in identifying unseen classes with minimal examples.",
        image: "/projects/siamese_nn.png",
        tags: ["TensorFlow", "Keras", "Python", "Machine Learning"],
        demoUrl: "https://www.linkedin.com/posts/adam-eccles-616b1427b_for-my-project-this-week-i-decided-to-get-activity-7348786596818653185-o4ii?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERUo3IBBgG_yuKhKGT9EJf9cg_sIfe4exY",
        githubLink: "https://github.com/ec1s123/Siamese-Neural-Network-for-Real-Time-Facial-Recognition",
    },
        {
        id: 2 ,
        title: "Phishing Website Detection using Machine Learning",
        description: "Developed a machine learning model to detect phishing websites using features extracted from URL structure, domain information, and HTML content. The model was trained on a dataset of known phishing and legitimate websites.",
        image: "/projects/phishing_detection.png",
        tags: ["TensorFlow", "Scikit-learn", "Python", "pandas", "numpy", "matplotlib", "Machine Learning"],
        demoUrl: "https://www.linkedin.com/posts/adam-eccles-616b1427b_cybersecurity-machinelearning-activity-7328086633109417984-RcaE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERUo3IBBgG_yuKhKGT9EJf9cg_sIfe4exY",
        githubLink: "https://github.com/ec1s123/phishing-detection-ml",
    },
        {
        id: 3,
        title: "Formula 1 Grand Prix Pace Predictor",
        description: "Developed a machine learning model using a XGBoost regressor to predict lap times in Formula 1 races. The model was trained on historical race data, weather conditions, and achieved high accuracy in predicting lap times for future races.",
        image: "/projects/Formula1_pace_predictor.png",
        tags: ["TensorFlow", "Scikit-learn", "Python", "pandas", "numpy","matplotlib", "Machine Learning"],
        demoUrl: "https://www.linkedin.com/posts/adam-eccles-616b1427b_machinelearning-f1-datascience-activity-7340383922876235778-ioyy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERUo3IBBgG_yuKhKGT9EJf9cg_sIfe4exY",
        githubLink: "https://github.com/ec1s123/Formula-1-GP-Predictor",
    },
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are a few of my recent projects. Feel free to explore and check out the code on GitHub!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4 py-1">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}

                                        {project.githubLink && (
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <Github size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <a
                        href="https://github.com/ec1s123"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    >
                        Check Out My Github<ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};