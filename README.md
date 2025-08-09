# Pranav Varma - Personal Portfolio

A modern, responsive personal portfolio website built with React and Framer Motion. Features a clean design with smooth animations and is fully responsive across all devices.

## 🚀 Features

- **Modern Design**: Clean, minimal design with beautiful gradients and typography
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Framer Motion powered animations for enhanced user experience
- **Component-Based**: Modular React components for maintainable code
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Optimized**: Fast loading times and optimized assets

## 📱 Sections

1. **Hero Section**: Animated introduction with name, roles, and call-to-action buttons
2. **About Section**: Personal information with skills and code block visualization
3. **Projects Section**: Showcase of four featured projects with technology tags
4. **Contact Section**: Contact form and social links
5. **Footer**: Copyright information and navigation links

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and functional components
- **Framer Motion**: Smooth animations and transitions
- **Modern CSS**: Custom CSS with Grid, Flexbox, and CSS Variables
- **Responsive Design**: Mobile-first approach with media queries

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pranav-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio

## 🚀 Deployment

### Netlify Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `build` folder to Netlify
   - Or connect your GitHub repository for automatic deployments

3. **Configure Netlify**
   - Set the publish directory to `build`
   - The `homepage: "."` in package.json ensures proper routing

### Other Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **GitHub Pages**: Use `gh-pages` package for GitHub Pages deployment
- **Firebase Hosting**: Use Firebase CLI for hosting

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   ├── Hero.js            # Hero section
│   ├── About.js           # About section
│   ├── Projects.js        # Projects showcase
│   ├── Contact.js         # Contact form
│   ├── Footer.js          # Footer component
│   └── *.css              # Component styles
├── App.js                 # Main app component
├── index.js               # React entry point
└── index.css              # Global styles
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.js` - Name and roles
- `src/components/About.js` - About content
- `src/components/Projects.js` - Project details
- `src/components/Contact.js` - Contact information

### Styling
- Modify CSS files in `src/components/` for custom styling
- Update color schemes in CSS variables
- Adjust animations in component files

### Adding Projects
Edit the `projects` array in `src/components/Projects.js`:
```javascript
const projects = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description",
    technologies: ["React", "Node.js"],
    category: "Full-Stack"
  }
  // Add more projects...
];
```

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Built with ❤️ by Pranav Varma** 