interface RUODisclaimerProps {
  variant?: "banner" | "inline" | "footer"
}

export function RUODisclaimer({ variant = "inline" }: RUODisclaimerProps) {
  if (variant === "banner") {
    return (
      <div className="bg-slate-50 border-b border-slate-200 py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-1.5 text-xs text-slate-500">
          <span>Research Use Only (RUO) — Not intended for diagnostic or therapeutic use</span>
        </div>
      </div>
    )
  }

  if (variant === "footer") {
    return (
      <p className="text-xs text-muted-foreground/70 mt-4">
        Research Use Only (RUO): Products are intended for research use only and are not for use in diagnostic or
        therapeutic procedures.
      </p>
    )
  }

  return (
    <div className="bg-slate-50 border border-slate-200 rounded px-3 py-2">
      <p className="text-xs text-slate-500">
        <span className="font-medium">Research Use Only (RUO):</span> This product is intended for research use only and
        is not for use in diagnostic or therapeutic procedures.
      </p>
    </div>
  )
}
