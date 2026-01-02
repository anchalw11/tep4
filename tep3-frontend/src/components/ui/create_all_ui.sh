#!/bin/bash

# Create all UI components with proper exports
ui_components=(
  "card-2"
  "gradient-tracing"
  "premium-testimonials"
  "shader-background"
  "typewriter-testimonial"
  "image-auto-slider"
  "video-modal"
  "button"
  "etheral-shadow"
)

for comp in "${ui_components[@]}"; do
  cat > "${comp}.tsx" << 'EOF'
export default function Component() {
  return <div />;
}

export { Component };
export const GradientTracing = () => <div />;
export const ElegantShape = () => <div />;
export const PremiumTestimonials = () => <div />;
export const ReviewSummaryCard = () => <div />;
export const Button = ({ children, ...props }: any) => <button {...props}>{children}</button>;
export const VideoModal = ({ children }: any) => <div>{children}</div>;
export const VideoModalTrigger = ({ children }: any) => <div>{children}</div>;
export const VideoModalContent = ({ children }: any) => <div>{children}</div>;
export const VideoModalTitle = ({ children }: any) => <h3>{children}</h3>;
export const VideoModalDescription = ({ children }: any) => <p>{children}</p>;
export const VideoModalVideo = ({ children }: any) => <div>{children}</div>;
export const VideoPreview = ({ children }: any) => <div>{children}</div>;
export const VideoPlayButton = ({ children }: any) => <button>{children}</button>;
export const VideoPlayer = ({ children }: any) => <div>{children}</div>;
export const CloseIcon = () => <div>×</div>;
EOF
  echo "Created ${comp}.tsx"
done

echo "All UI components created"
