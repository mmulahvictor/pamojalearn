# PamojaLearn

## Project Overview

**Project Name**: Collaborative Learning Platform

**Technologies**: 
- **Front-end**: React JS
- **Back-end**: Ruby on Rails
- **Database**: PostgreSQL
- **Search**: Elasticsearch
- **Real-time**: WebSockets
- **Authentication**: JWT and BCrypt
- **Recommendation Engine**: Collaborative and Content-Based Filtering

## Component Breakdown

### 1. User Authentication and Security

#### Front-end Components:
- **SignUpComponent**: Form for new user registration.
- **LoginComponent**: Form for user login.
- **ProfileComponent**: Display and edit user profile.

#### Back-end Components:
- **UserModel**: Manages user data (e.g., username, email, hashed password).
- **AuthController**: Handles sign-up, login, and JWT token generation.
- **ProfileController**: Manages user profile data and updates.

#### Algorithms/Models:
- **BCrypt** for password hashing.
- **JWT** for secure authentication tokens.

### 2. Dashboard

#### Front-end Components:
- **DashboardComponent**: Main dashboard with user profile and enrolled courses.
- **CourseListComponent**: List of user-enrolled courses.
- **RecommendationComponent**: Recommended courses for the user.

#### Back-end Components:
- **UserModel**: Retrieves user information.
- **CourseModel**: Manages course data.
- **RecommendationService**: Generates course recommendations.

#### Algorithms/Models:
- **Collaborative Filtering** and **Content-Based Filtering** for recommendations.
- **Hybrid Recommendation System** for enhanced accuracy.

### 3. Course Management

#### Front-end Components:
- **CourseFormComponent**: Form to create or edit courses.
- **CourseDetailComponent**: Detailed view of a specific course.
- **ModuleListComponent**: List of modules in a course.
- **LessonListComponent**: List of lessons in a module.

#### Back-end Components:
- **CourseModel**: Manages course data.
- **ModuleModel**: Manages modules within courses.
- **LessonModel**: Manages lessons within modules.
- **CoursesController**, **ModulesController**, **LessonsController**: Handle CRUD operations for courses, modules, and lessons.

### 4. Interactive Lessons

#### Front-end Components:
- **LessonComponent**: Displays lesson content.
- **QuizComponent**: Handles quizzes.
- **CodeExerciseComponent**: Interactive coding exercises.

#### Back-end Components:
- **QuizModel**: Manages quiz data.
- **ExerciseModel**: Manages coding exercises.
- **QuizzesController**, **ExercisesController**: Handle CRUD operations for quizzes and exercises.

#### Algorithms/Models:
- **Rule-Based Systems** for quiz evaluation.
- **NLP Models (BERT)** for evaluating open-ended questions.

### 5. Discussion Forums

#### Front-end Components:
- **ForumComponent**: Displays course forum.
- **ThreadComponent**: Displays individual threads.
- **PostComponent**: Form to create new posts.

#### Back-end Components:
- **ForumModel**: Manages forum data.
- **ThreadModel**: Manages threads within forums.
- **PostModel**: Manages posts within threads.
- **ForumsController**, **ThreadsController**, **PostsController**: Handle CRUD operations for forums, threads, and posts.

#### Algorithms/Models:
- **Naive Bayes** and **SVM** for spam detection.
- **Deep Learning Models (LSTM)** for advanced spam detection.

### 6. Real-Time Collaboration

#### Front-end Components:
- **LiveSessionComponent**: Interface for live sessions.
- **ChatComponent**: Real-time chat interface.
- **LiveCodeComponent**: Real-time collaborative coding.

#### Back-end Components:
- **LiveSessionModel**: Manages live session data.
- **SessionsController**: Manages live session creation and management.
- **WebSockets**: Enables real-time communication.

#### Algorithms/Models:
- **Operational Transformation (OT)** or **CRDTs** for collaborative editing.

### 7. Progress Tracking

#### Front-end Components:
- **ProgressTrackerComponent**: Displays user progress.
- **ProgressDetailComponent**: Detailed progress view.

#### Back-end Components:
- **ProgressModel**: Tracks user progress.
- **ProgressController**: Manages progress data and retrieval.

#### Algorithms/Models:
- **Time Series Analysis** and **Markov Chains** for progress prediction.

### 8. Search and Recommendations

#### Front-end Components:
- **SearchComponent**: Search bar and results.
- **RecommendationComponent**: Displays recommended courses.

#### Back-end Components:
- **SearchController**: Handles search queries.
- **RecommendationService**: Manages course recommendations.

#### Algorithms/Models:
- **Elasticsearch** for search functionality.
- **TF-IDF** for ranking search results.
- **Collaborative Filtering**, **Content-Based Filtering**, and **Hybrid Systems** for recommendations.

## Detailed Flowchart

### User Authentication and Security

1. **SignUpComponent**:
   - User enters details -> `AuthController` validates and saves user -> `UserModel` stores hashed password.

2. **LoginComponent**:
   - User enters credentials -> `AuthController` validates and issues JWT -> Token stored in frontend.

3. **ProfileComponent**:
   - Fetch user profile -> `ProfileController` retrieves data -> `UserModel` provides profile information.

### Dashboard

1. **DashboardComponent**:
   - Fetch user data -> `UserModel` retrieves profile and courses -> Display user info and courses.

2. **CourseListComponent**:
   - Fetch courses -> `CourseModel` retrieves user's courses -> Display course list.

3. **RecommendationComponent**:
   - Fetch recommendations -> `RecommendationService` uses filtering algorithms -> Display recommended courses.

### Course Management

1. **CourseFormComponent**:
   - User inputs course details -> Submit form to `CoursesController` -> `CourseModel` saves course data.

2. **CourseDetailComponent**:
   - Fetch course details -> `CoursesController` retrieves data -> Display course info.

3. **ModuleListComponent**:
   - Fetch modules -> `ModulesController` retrieves modules -> Display module list.

4. **LessonListComponent**:
   - Fetch lessons -> `LessonsController` retrieves lessons -> Display lesson list.

### Interactive Lessons

1. **LessonComponent**:
   - Fetch lesson content -> `LessonsController` provides data -> Display content.

2. **QuizComponent**:
   - User takes quiz -> Submit answers to `QuizzesController` -> Evaluate with rule-based systems/NLP models -> Display results.

3. **CodeExerciseComponent**:
   - User interacts with coding exercise -> `ExercisesController` provides exercise data -> Display interactive coding environment.

### Discussion Forums

1. **ForumComponent**:
   - Fetch forum threads -> `ForumsController` retrieves threads -> Display threads.

2. **ThreadComponent**:
   - Fetch thread details -> `ThreadsController` provides data -> Display thread and posts.

3. **PostComponent**:
   - User creates post -> Submit to `PostsController` -> `PostModel` saves post.

### Real-Time Collaboration

1. **LiveSessionComponent**:
   - User starts/join session -> `SessionsController` initiates session -> Use WebSockets for real-time communication.

2. **ChatComponent**:
   - User sends message -> Use WebSockets -> Display in chat interface.

3. **LiveCodeComponent**:
   - Users collaborate on code -> WebSockets transmit changes -> Use OT/CRDTs for consistency.

### Progress Tracking

1. **ProgressTrackerComponent**:
   - Fetch progress -> `ProgressController` provides data -> Display progress chart.

2. **ProgressDetailComponent**:
   - Fetch detailed progress -> `ProgressController` provides detailed data -> Display detailed view.

### Search and Recommendations

1. **SearchComponent**:
   - User enters search query -> `SearchController` queries Elasticsearch -> Display results.

2. **RecommendationComponent**:
   - Fetch recommendations -> `RecommendationService` uses filtering algorithms -> Display recommendations.

## Getting Started

### Prerequisites

- Node.js
- Ruby on Rails
- PostgreSQL
- Elasticsearch

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/pamojalearn.git
   cd pamojalearn
   ```

2. Install dependencies for the front-end:
   ```sh
   cd frontend
   npm install
   ```

3. Install dependencies for the back-end:
   ```sh
   cd backend
   bundle install
   ```

4. Set up the database:
   ```sh
   rails db:create
   rails db:migrate
   ```

5. Start the development server:
   ```sh
   rails s
   cd frontend
   npm start
   ```

### Usage

1. Open your browser and navigate to `http://localhost:3000` to view the application.
2. Register a new account or log in with existing credentials.
3. Explore the dashboard, manage courses, participate in discussions, and track your progress.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Happy Learning with PamojaLearn!