flowchart TD
  A[Inicio] --> B[Explora productos]
  B --> C[Selecciona artículos]
  C --> D[Se dirige a la caja]
  D --> E[Registro de productos]
  E --> F{Pago}
  F -->|Efectivo| G[Entrega de cambio]
  F -->|Tarjeta| H[Procesamiento electrónico]
  F -->|Transferencia| I[Confirmación bancaria]
  G --> J[Entrega de productos]
  H --> J
  I --> J
  J --> K[Salida]
