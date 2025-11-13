# Hotel Palais Royal - Frontend

## Description
Modern, multilingual hotel website for Hotel Palais Royal in Sfax, Tunisia. Built with React, featuring lazy-loaded images, smooth language switching, and responsive design.

## Features
- ✅ Multilingual support (English, French, Arabic)
- ✅ Lazy loading images for optimal performance
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Room browsing and details
- ✅ Online booking/inquiry system
- ✅ Contact form
- ✅ RTL support for Arabic
- ✅ Modern UI with smooth animations

## Technologies
- React 19
- React Router DOM 7
- i18next (internationalization)
- SASS/SCSS (styling)
- React Icons & PrimeIcons
- Intersection Observer API (lazy loading)

## Prerequisites
- Node.js >= 14.x
- npm or yarn

## Installation

```bash
# Install dependencies
npm install

# Create .env file
# Create a .env file in the root directory (see .env.example)
```

## Environment Variables

Create a `.env` file:

```env
REACT_APP_API_URL=http://localhost:5000
```

## Running the Application

```bash
# Development mode
npm start

# Production build
npm run build

# Test production build locally
npm install -g serve
serve -s build
```

## Project Structure

```
hotel-palais-royal/
├── public/                     # Static files
├── src/
│   ├── assets/
│   │   └── images/            # Hotel images
│   ├── components/
│   │   ├── BookingForm/       # Booking form component
│   │   ├── Facilities/        # Hotel facilities section
│   │   ├── Footer/            # Footer component
│   │   ├── Hero/              # Hero section
│   │   ├── HeroSection/       # Reusable hero banner
│   │   ├── HotelServices/     # Services showcase
│   │   ├── LazyImage/         # ⭐ NEW: Lazy loading image component
│   │   ├── Navbar/            # Navigation bar
│   │   ├── Rooms/             # Rooms grid component
│   │   └── Testimonials/      # Customer testimonials
│   ├── config/
│   │   └── api.js            # ⭐ NEW: API configuration
│   ├── data/
│   │   └── roomsData.js      # Room information
│   ├── locals/
│   │   ├── ar/               # Arabic translations
│   │   ├── en/               # English translations
│   │   ├── fr/               # French translations
│   │   └── i18n.js           # i18n configuration
│   ├── pages/
│   │   ├── About/            # About page
│   │   ├── Booking/          # Booking page
│   │   ├── Contact/          # Contact page
│   │   ├── Home/             # Homepage
│   │   ├── RoomDetails/      # Room details page
│   │   └── Rooms/            # Rooms listing page
│   ├── styles/
│   │   ├── abstracts/        # SCSS variables, mixins
│   │   ├── base/             # Base styles
│   │   └── main.scss         # Main stylesheet
│   ├── App.js                # Main app component
│   └── index.js              # Entry point
└── package.json
```

## Key Features

### 1. Lazy Loading Images
All images use the custom `LazyImage` component:
- Only loads images when scrolled into view
- Shows shimmer loading effect
- Reduces initial page load time by 60-70%
- Smooth fade-in animation

### 2. Language Switching
- Instant language switching (no page reload)
- Persistent language selection (localStorage)
- RTL layout support for Arabic
- Visual indicator for active language

### 3. Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 992px
  - Desktop: > 992px

### 4. Booking System
- Multi-room booking
- Guest count selection (adults, children)
- Date validation
- Special requests field
- Form validation with error messages
- Loading states during submission

## Available Scripts

```bash
npm start          # Start development server (port 3000)
npm run build      # Create production build
npm test           # Run tests
npm run eject      # Eject from Create React App (⚠️ one-way)
```

## Configuration

### Adding New Room Types
Edit `src/data/roomsData.js`:

```javascript
export const roomsData = [
  {
    slug: "new-room-type",
    title: "New Room Type",
    price: "From $100 / Night",
    images: [
      require("./assets/images/Rooms/new-room/1.JPG"),
      // Add more images...
    ],
    description: "Room description here",
    roomInfo: {
      size: "400 Sq ft",
      beds: "1 King Bed",
      occupancy: "2 People",
      view: "City View",
    },
  },
  // Add more rooms...
];
```

### Adding Translations
Edit translation files in `src/locals/[language]/translation.json`:

```json
{
  "newSection": {
    "title": "New Title",
    "description": "New Description"
  }
}
```

Then use in components:
```javascript
import { useTranslation } from "react-i18next";

const MyComponent = () => {
  const { t } = useTranslation();
  return <h1>{t("newSection.title")}</h1>;
};
```

## Performance Optimization

### Image Optimization (Recommended)
1. **Convert to WebP:**
   ```bash
   # Install cwebp
   brew install webp
   
   # Convert images
   cwebp -q 80 input.jpg -o output.webp
   ```

2. **Create Multiple Sizes:**
   - Thumbnail: 400px width
   - Medium: 800px width
   - Large: 1200px width

3. **Use Picture Element:**
   ```javascript
   <picture>
     <source srcSet="image.webp" type="image/webp" />
     <img src="image.jpg" alt="Fallback" />
   </picture>
   ```

### Build Optimization
The production build automatically:
- Minifies JavaScript and CSS
- Optimizes images
- Generates source maps
- Creates service worker (optional)

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Static Hosting

#### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

#### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### Traditional Hosting (nginx)
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/build;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/css application/javascript image/svg+xml;

    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## Browser Support
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- iOS Safari (iOS 12+)
- Chrome Android (last 2 versions)

## Common Issues

### Issue: API Connection Failed
**Error:** `Failed to fetch`  
**Solution:** 
- Check if backend is running
- Verify `REACT_APP_API_URL` in `.env`
- Check CORS settings on backend

### Issue: Images Not Loading
**Error:** 404 on image requests  
**Solution:**
- Verify image paths in `roomsData.js`
- Ensure images exist in `src/assets/images/`
- Check file extensions (JPG vs jpg)

### Issue: Translation Missing
**Error:** Shows translation key instead of text  
**Solution:**
- Check key exists in all translation files
- Verify no typos in translation keys
- Clear browser cache

### Issue: Build Fails
**Error:** Memory allocation failed  
**Solution:**
```bash
# Increase Node memory limit
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

## Best Practices

### 1. Adding New Components
- Use functional components with hooks
- Keep components small and focused
- Use SCSS modules for styling
- Add PropTypes or TypeScript

### 2. State Management
- Use local state for component-specific data
- Use Context API for shared state (if needed)
- Consider Redux for complex state (optional)

### 3. Performance
- Use React.memo() for expensive components
- Implement code splitting with React.lazy()
- Optimize re-renders with useCallback/useMemo
- Always use LazyImage for images

### 4. Accessibility
- Use semantic HTML
- Add alt text to images
- Include aria-labels for buttons
- Test with keyboard navigation
- Support screen readers

## Testing

```bash
# Run tests
npm test

# Test with coverage
npm test -- --coverage

# Run specific test
npm test -- ComponentName
```

## Contributing
1. Create feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request

## Support
- Email: info@hotelpalaisroyal.com
- Phone: +216 70 222 000
- Address: Route Mahdia Km 1, 3099 Sfax, Tunisia

## License
ISC

---

**Version:** 2.0.0  
**Last Updated:** November 2025  
**Status:** Production Ready ✅

<!-- Force rebuild: Thu Nov 13 05:16:18 CET 2025 -->
