flowchart TD
    A[Inicio: Cliente entra a la tienda] --> B[Explora productos en diferentes secciones]
    B --> C[Selecciona artículos y los coloca en el carrito]
    C --> D[Se dirige a la caja]
    D --> E[El cajero registra los productos]
    E --> F[Cliente realiza el pago]
    F --> G{Método de pago}
    G -->|Efectivo| H[Entrega de cambio]
    G -->|Tarjeta| I[Procesamiento electrónico]
    G -->|Transferencia| J[Confirmación bancaria]
    H --> K[Entrega de productos]
    I --> K
    J --> K
    K --> L[Cliente sale con su compra]
    L --> M[Fin del proceso]
