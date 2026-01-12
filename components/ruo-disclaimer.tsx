import { AlertTriangle } from "lucide-react"

interface RUODisclaimerProps {
  variant?: "banner" | "inline" | "footer"
}

export function RUODisclaimer({ variant = "inline" }: RUODisclaimerProps) {
  if (variant === "banner") {
    return (
      <div className="bg-amber-50 border-y border-amber-200 py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm text-amber-900">
          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
          <span>
            <strong>Research Use Only (RUO)</strong> — Products are not intended for diagnostic or therapeutic use.
          </span>
        </div>
      </div>
    )
  }

  if (variant === "footer") {
    return (
      <div className="text-xs text-muted-foreground border-t border-border pt-4 mt-4">
        <p className="flex items-start gap-2">
          <AlertTriangle className="w-3 h-3 mt-0.5 flex-shrink-0" />
          <span>
            <strong>Research Use Only (RUO):</strong> All BlueRay Precision products are intended for research use only
            and are not for use in diagnostic or therapeutic procedures.
          </span>
        </p>
      </div>
    )
  }

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
      <p className="text-sm text-amber-900 flex items-start gap-2">
        <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
        <span>
          <strong>Research Use Only (RUO):</strong> This product is intended for research use only and is not for use in
          diagnostic or therapeutic procedures.
        </span>
      </p>
    </div>
  )
}
