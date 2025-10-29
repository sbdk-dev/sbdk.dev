import { posthog } from '@/components/PosthogProvider'

/**
 * Custom event tracking helpers for Posthog
 */

export const analytics = {
  /**
   * Track a custom event
   */
  track: (eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      posthog.capture(eventName, properties)
    }
  },

  /**
   * Track button clicks
   */
  trackButtonClick: (buttonName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      posthog.capture('button_clicked', {
        button_name: buttonName,
        ...properties,
      })
    }
  },

  /**
   * Track demo interactions
   */
  trackDemoInteraction: (interactionType: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      posthog.capture('demo_interaction', {
        interaction_type: interactionType,
        ...properties,
      })
    }
  },

  /**
   * Track terminal commands
   */
  trackTerminalCommand: (command: string) => {
    if (typeof window !== 'undefined') {
      posthog.capture('terminal_command_executed', {
        command,
        timestamp: new Date().toISOString(),
      })
    }
  },

  /**
   * Track pipeline visualizer interactions
   */
  trackPipelineView: (action: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      posthog.capture('pipeline_visualizer_action', {
        action,
        ...properties,
      })
    }
  },

  /**
   * Track CTA clicks (important for conversion tracking)
   */
  trackCTA: (ctaLocation: string, ctaText: string, targetUrl?: string) => {
    if (typeof window !== 'undefined') {
      posthog.capture('cta_clicked', {
        location: ctaLocation,
        text: ctaText,
        target_url: targetUrl,
        timestamp: new Date().toISOString(),
      })
    }
  },

  /**
   * Track section views (for scroll depth analysis)
   */
  trackSectionView: (sectionName: string) => {
    if (typeof window !== 'undefined') {
      posthog.capture('section_viewed', {
        section_name: sectionName,
        timestamp: new Date().toISOString(),
      })
    }
  },

  /**
   * Track external link clicks
   */
  trackExternalLink: (url: string, linkText?: string) => {
    if (typeof window !== 'undefined') {
      posthog.capture('external_link_clicked', {
        url,
        link_text: linkText,
        timestamp: new Date().toISOString(),
      })
    }
  },

  /**
   * Track GitHub stars/visits
   */
  trackGitHubClick: (location: string) => {
    if (typeof window !== 'undefined') {
      posthog.capture('github_clicked', {
        location,
        target_url: 'https://github.com/sbdk-dev/sbdk-dev',
        timestamp: new Date().toISOString(),
      })
    }
  },

  /**
   * Identify a user (for authenticated experiences)
   */
  identify: (userId: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      posthog.identify(userId, properties)
    }
  },

  /**
   * Reset user identity (on logout)
   */
  reset: () => {
    if (typeof window !== 'undefined') {
      posthog.reset()
    }
  },
}
