// Content checked against the linked repository notebooks and saved outputs.
export const projectCaseStudies = [
    {
        "slug": "siamese-face-verification",
        "demoUrl": "https://www.linkedin.com/posts/adam-eccles-616b1427b_for-my-project-this-week-i-decided-to-get-activity-7348786596818653185-o4ii?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERUo3IBBgG_yuKhKGT9EJf9cg_sIfe4exY",
        "title": "Siamese Face Verification",
        "eyebrow": "Computer vision / Deep learning / Face verification",
        "intro": "Learning whether two faces match. A shared neural network connects image-pair training to a webcam verification prototype.",
        "description": "Built a TensorFlow Siamese network with shared image embeddings and an OpenCV webcam workflow to compare faces against reference images.",
        "githubLink": "https://github.com/ec1s123/Siamese-Neural-Network-for-Real-Time-Facial-Recognition",
        "notebook": "Facial_Recognition.ipynb",
        "tags": [
            "TensorFlow",
            "Keras",
            "OpenCV",
            "Python"
        ],
        "image": "/projects/siamese-verification.png",
        "hero": {
            "src": "/projects/siamese-verification.png",
            "alt": "Notebook example displaying an anchor image and a different-person comparison image with a negative pair label.",
            "caption": "A saved notebook example of a negative image pair. The displayed label is ground truth, not an accuracy score.",
            "width": 966,
            "height": 627
        },
        "metadata": [
            [
                "Project",
                "Face verification prototype"
            ],
            [
                "Data",
                "Webcam captures + LFW"
            ],
            [
                "Built with",
                "TensorFlow · Keras"
            ],
            [
                "Interface",
                "OpenCV webcam"
            ]
        ],
        "overviewTitle": "Learn similarity. Compare identities.",
        "overview": [
            "I built a Siamese network to compare two face images through the same convolutional encoder. Each image becomes an embedding; a distance layer and sigmoid classifier then produce a match score.",
            "The project connects data collection, paired-image preprocessing, a custom training loop, saved model checkpoints, and webcam-based verification. It follows the architecture described by Koch, Zemel, and Salakhutdinov in their one-shot image recognition paper."
        ],
        "metricsTitle": "A shared representation for every pair.",
        "metricsContext": "Architecture from the saved notebook",
        "metrics": [
            [
                "Trainable parameters",
                "39M"
            ],
            [
                "Embedding dimensions",
                "4,096"
            ],
            [
                "Input resolution",
                "100 × 100"
            ]
        ],
        "metricsNote": "Both image branches reuse the same encoder weights. A custom L1 distance layer compares the embeddings before binary classification.",
        "experienceTitle": "From captured image to verification.",
        "workflow": [
            [
                "Capture",
                "Collect anchor and positive images through OpenCV; use LFW images for negative pairs."
            ],
            [
                "Encode",
                "Resize and normalize both images, then pass them through the shared CNN."
            ],
            [
                "Compare",
                "Compute absolute embedding differences and score the pair with a sigmoid classifier."
            ],
            [
                "Verify",
                "Compare a webcam capture against a reference set and aggregate thresholded matches."
            ]
        ],
        "figures": [],
        "engineering": [
            [
                "Paired data pipeline",
                "Created labeled matching and non-matching pairs, resized inputs to 100 × 100 pixels, and scaled pixel values to the 0–1 range. TensorFlow caching, shuffling, batching, and prefetching support training."
            ],
            [
                "Custom model architecture",
                "Implemented four convolutional blocks, a 4,096-dimensional embedding, and a custom Keras L1 distance layer. Shared weights keep both inputs in the same learned feature space."
            ],
            [
                "Explicit training loop",
                "Used GradientTape with binary cross-entropy and Adam at a 0.0001 learning rate. The training routine runs for 50 epochs and saves checkpoints every 10 epochs."
            ],
            [
                "Model persistence and verification",
                "Saved and reloaded the model with its custom layer. The webcam workflow uses a 0.9 pair-score threshold and requires more than 70% of reference comparisons to pass."
            ]
        ],
        "evaluation": [
            "The repository includes an image-pair example and a webcam demo, but no complete saved test-set accuracy report. This case study therefore highlights the implemented architecture and workflow.",
            "A fixed, identity-separated test set and threshold calibration across lighting and camera conditions would be the next steps toward a stronger generalization claim."
        ],
        "extraSource": {
            "label": "Reference paper: Siamese Neural Networks for One-shot Image Recognition",
            "url": "https://www.cs.cmu.edu/~rsalakhu/papers/oneshot1.pdf"
        }
    },
    {
        "slug": "phishing-detection",
        "demoUrl": "https://www.linkedin.com/posts/adam-eccles-616b1427b_cybersecurity-machinelearning-activity-7328086633109417984-RcaE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERUo3IBBgG_yuKhKGT9EJf9cg_sIfe4exY",
        "title": "Phishing Detection",
        "eyebrow": "Cybersecurity / Supervised learning / Model evaluation",
        "intro": "Finding phishing signals in website features. A comparative ML study with fold-aware resampling and interpretable model outputs.",
        "description": "Compared Random Forest and logistic regression on 11,055 website records. Achieved 97.38% mean cross-validation accuracy with training-fold SMOTE and feature-importance analysis.",
        "githubLink": "https://github.com/ec1s123/phishing-detection-ml",
        "notebook": "phishing-detection-ml.ipynb",
        "tags": [
            "Scikit-learn",
            "Python",
            "pandas",
            "imbalanced-learn"
        ],
        "image": "/projects/phishing-cross-validation.png",
        "hero": {
            "src": "/projects/phishing-cross-validation.png",
            "alt": "Ten-fold accuracy chart comparing Random Forest with L1-regularized logistic regression.",
            "caption": "Saved notebook results: Random Forest and logistic regression evaluated across ten folds.",
            "width": 989,
            "height": 490
        },
        "metadata": [
            [
                "Project",
                "Classification study"
            ],
            [
                "Dataset",
                "11,055 website records"
            ],
            [
                "Inputs",
                "30 structured features"
            ],
            [
                "Built with",
                "Scikit-learn · pandas"
            ]
        ],
        "overviewTitle": "Compare models. Understand the signals.",
        "overview": [
            "I used a labeled phishing-websites dataset to compare a non-linear Random Forest with L1-regularized logistic regression. The inputs encode URL, page, and domain characteristics rather than requiring a live crawler.",
            "The workflow combines class-balance analysis, cross-validation, precision and recall reports, and feature-importance plots. Follow-up experiments explore how reducing the feature set changes performance."
        ],
        "metricsTitle": "A measurable advantage across ten folds.",
        "metricsContext": "Saved notebook · mean CV accuracy",
        "metrics": [
            [
                "Random Forest",
                "97.38%"
            ],
            [
                "Logistic regression",
                "92.74%"
            ],
            [
                "Accuracy difference",
                "+4.64 pp"
            ]
        ],
        "metricsNote": "The all-feature Random Forest reported a fold-to-fold standard deviation of 0.35 percentage points, compared with 0.90 for logistic regression.",
        "experienceTitle": "Make model behavior visible.",
        "workflow": [
            [
                "Inspect",
                "Load the dataset, inspect feature columns, and measure the class distribution."
            ],
            [
                "Balance",
                "Apply SMOTE within each training fold using an imbalanced-learn pipeline."
            ],
            [
                "Evaluate",
                "Compare accuracy across ten folds and produce out-of-fold classification reports."
            ],
            [
                "Explain",
                "Review feature importances and explore smaller feature subsets."
            ]
        ],
        "figures": [
            {
                "src": "/projects/phishing-feature-importance.png",
                "title": "Which features matter?",
                "alt": "Random Forest bar chart showing the top fifteen feature importances.",
                "caption": "Feature importance from the fitted all-feature Random Forest, used to guide exploratory feature-reduction experiments.",
                "width": 990,
                "height": 490
            }
        ],
        "engineering": [
            [
                "Resampling inside the pipeline",
                "Placed SMOTE before the estimator in an imbalanced-learn pipeline so synthetic samples are generated from each training fold rather than from the complete dataset before validation."
            ],
            [
                "Two complementary models",
                "Compared Random Forest with an L1-regularized logistic regression baseline. The logistic pipeline also fits StandardScaler within cross-validation."
            ],
            [
                "Out-of-fold diagnostics",
                "Used cross_val_predict to generate classification reports alongside mean accuracy and fold-level variation. This makes precision, recall, and class-specific behavior inspectable."
            ],
            [
                "Feature-reduction experiments",
                "Ranked inputs using Random Forest importance and explored 20-feature and six-feature variants. The notebook includes their classification reports and confusion matrices."
            ]
        ],
        "evaluation": [
            "The headline figures come from shuffled ten-fold cross-validation on the existing dataset, not a prospective test on newly encountered websites. They describe this dataset and experimental setup.",
            "Feature-subset experiments used rankings learned from the complete dataset before cross-validation. Those exploratory scores need nested feature selection before being treated as independent validation."
        ]
    },
    {
        "slug": "formula-1-pace-predictor",
        "demoUrl": "https://www.linkedin.com/posts/adam-eccles-616b1427b_machinelearning-f1-datascience-activity-7340383922876235778-ioyy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERUo3IBBgG_yuKhKGT9EJf9cg_sIfe4exY",
        "title": "Formula 1 Pace Predictor",
        "eyebrow": "Sports analytics / Regression / Data integration",
        "intro": "Connecting qualifying performance to race-pace estimates. A Canadian Grand Prix experiment built around real timing data and gradient boosting.",
        "description": "Built a Canadian GP race-pace experiment using FastF1 data, qualifying gaps, and a scikit-learn gradient boosting model, with nested cross-validation and feature-importance analysis.",
        "githubLink": "https://github.com/ec1s123/Formula-1-GP-Predictor",
        "notebook": "Formula1_Canada_GP_ML_Predictor.py",
        "tags": [
            "FastF1",
            "Scikit-learn",
            "Python",
            "pandas"
        ],
        "image": "/projects/Formula1_pace_predictor.png",
        "hero": {
            "src": "/projects/Formula1_pace_predictor.png",
            "alt": "Formula 1 car on track, illustrating the race-pace modeling project.",
            "caption": "A modeling experiment focused on the 2025 Canadian Grand Prix, using historical race and qualifying data.",
            "width": 1500,
            "height": 1000
        },
        "metadata": [
            [
                "Project",
                "Race-pace experiment"
            ],
            [
                "Event",
                "2025 Canadian GP"
            ],
            [
                "Data",
                "FastF1 · OpenWeatherMap"
            ],
            [
                "Model",
                "Gradient boosting"
            ]
        ],
        "overviewTitle": "Build a picture of race pace.",
        "overview": [
            "I combined 2024 Canadian GP race laps with 2025 qualifying data to explore driver-level pace estimates. The pipeline cleans timing data, builds sector averages and qualifying gaps, and prepares a feature table for regression.",
            "A scikit-learn GradientBoostingRegressor turns those inputs into estimated average lap times. The script produces a ranked output and a feature-importance chart to make the model’s behavior easier to examine."
        ],
        "metricsTitle": "A structured modeling experiment.",
        "metricsContext": "Pipeline configuration",
        "metrics": [
            [
                "Model input features",
                "8"
            ],
            [
                "Hyperparameter combinations",
                "54"
            ],
            [
                "Outer / inner CV folds",
                "5 / 3"
            ]
        ],
        "metricsNote": "The tuning loop evaluates mean absolute error in seconds. These figures describe the implementation; the repository does not include a saved numerical cross-validation report.",
        "experienceTitle": "From race sessions to model outputs.",
        "workflow": [
            [
                "Collect",
                "Load historical race laps and qualifying sessions through FastF1."
            ],
            [
                "Prepare",
                "Aggregate sector times, calculate gaps to pole, and join weather inputs."
            ],
            [
                "Tune",
                "Search gradient boosting configurations inside an outer evaluation loop."
            ],
            [
                "Inspect",
                "Rank pace estimates and visualize the fitted model’s feature importances."
            ]
        ],
        "figures": [
            {
                "src": "/projects/f1-feature-importance.png",
                "title": "Where the model finds its signal",
                "alt": "Feature-importance chart showing sector two as the largest contributor, followed by sector one.",
                "caption": "The saved chart is dominated by historical sector averages. Weather inputs receive no importance in this fitted model.",
                "width": 800,
                "height": 500
            }
        ],
        "engineering": [
            [
                "Timing-data preparation",
                "Used FastF1’s quick-lap selection and converted lap and sector durations to seconds. Aggregated sector times per driver and filled missing sector values with historical medians."
            ],
            [
                "Feature integration",
                "Joined qualifying delta-to-pole, three sector averages, rain probability, centered temperature, and encoded driver and team fields into an eight-feature table."
            ],
            [
                "Nested hyperparameter search",
                "Searched estimator count, learning rate, depth, and subsampling across 54 combinations. Used three-fold inner tuning within five outer folds, then a final search over all rows."
            ],
            [
                "Interpretable outputs",
                "Generated a feature-importance plot and ranked average-lap-time estimates. Applied a mean-shift adjustment to align the predictions with the mean of the training targets."
            ]
        ],
        "evaluation": [
            "The targets are historical average lap times, and sector features are derived from the same historical race. The displayed rankings are fitted estimates, not verified predictions of the 2025 finishing order.",
            "A stronger future-race evaluation would require multiple seasons, updated team mappings, and held-out races. The current script also imputes missing targets and applies the same weather values to all drivers, limiting what this experiment can establish."
        ]
    }
];
