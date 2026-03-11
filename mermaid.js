erDiagram
    CATEGORIA ||--o{ PRODUCTOS : contiene
    PRODUCTOS ||--o{ INVENTARIO : tiene
    PRODUCTOS ||--o{ VENTAS : incluye
    VENTAS ||--o{ EMPLEADOS : realiza
    PRODUCTOS ||--o{ PROVEEDORES : suministra
    INVENTARIO ||--o{ VENTAS : reduce

    CATEGORIA {
        int categoriaID PK
        string nombre
        string descripcion
        date fechaCreacion
    }

    PRODUCTOS {
        int productoID PK
        int categoriaID FK
        string nombre
        string descripcion
        decimal precio
        int proveedorID FK
        date fechaCreacion
    }

    INVENTARIO {
        int inventarioID PK
        int productoID FK
        int cantidad
        int cantidadMinima
        date ultimaActualizacion
    }

    VENTAS {
        int ventaID PK
        int productoID FK
        int empleadoID FK
        int cantidad
        decimal montoTotal
        date fechaVenta
    }

    EMPLEADOS {
        int empleadoID PK
        string nombre
        string apellido
        string email
        string telefono
        string puesto
        decimal salario
        date fechaContratacion
    }

    PROVEEDORES {
        int proveedorID PK
        string nombre
        string direccion
        string telefono
        string email
        string contacto
        date fechaRegistro
    }
