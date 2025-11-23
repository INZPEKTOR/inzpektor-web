"use client"

/**
 * Props for the RealisticSwitch component.
 */
interface RealisticSwitchProps {
  /** Current state of the switch */
  isOn: boolean
  /** Callback when switch is toggled */
  onToggle: () => void
  /** Orientation of the switch */
  orientation?: "horizontal" | "vertical"
}

/**
 * A realistic-looking toggle switch component with 3D visual effects.
 *
 * Features:
 * - Skeuomorphic design with realistic shadows and highlights
 * - Support for horizontal or vertical orientation
 * - Light indicator that glows when on
 * - Dark mode container when switch is off
 * - Accessible checkbox implementation with ARIA role
 *
 * Uses CSS classes from light-widget-switch.css for styling.
 *
 * @param props - Switch configuration and state
 */
export function RealisticSwitch({ isOn, onToggle, orientation = "horizontal" }: RealisticSwitchProps) {
  const switchClasses = `switch ${orientation === 'vertical' ? 'switch--vertical' : ''}`;
  const containerClasses = `switch-container ${!isOn ? 'switch-container--dark' : ''}`;

  return (
    <div className={containerClasses}>
      <label>
        <span className={switchClasses}>
          <input
            className="switch__input"
            type="checkbox"
            role="switch"
            checked={isOn}
            onChange={onToggle}
          />
          <span className="switch__surface">
            <span className="switch__surface-glare"></span>
          </span>
          <span className="switch__inner-shadow"></span>
          <span className="switch__inner">
            <span className="switch__inner-glare"></span>
          </span>
          <span className="switch__rocker-shadow"></span>
          <span className="switch__rocker" />
          <span className="switch__light">
            <span className="switch__light-inner"></span>
          </span>
        </span>
      </label>
    </div>
  );
}
