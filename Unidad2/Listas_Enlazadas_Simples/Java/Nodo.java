class Nodo {
    int dato;
    Nodo siguiente;

    public Nodo(int dato) {
        this.dato = dato;
        this.siguiente = null;
    }
}

class ListaEnlazada {
    Nodo cabeza;

    public ListaEnlazada() {
        this.cabeza = null;
    }

    public void insertarAlPrincipio(int dato) {
        Nodo nuevoNodo = new Nodo(dato);
        nuevoNodo.siguiente = cabeza;
        cabeza = nuevoNodo;
    }

    public void mostrarLista() {
        Nodo actual = cabeza;
        while (actual != null) {
            System.out.print(actual.dato + " ");
            actual = actual.siguiente;
        }
        System.out.println();
    }
}

class Lista {
    public static void main(String[] args) {
        ListaEnlazada lista = new ListaEnlazada();

        lista.insertarAlPrincipio(5);
        lista.insertarAlPrincipio(1);
        lista.insertarAlPrincipio(2);
        lista.insertarAlPrincipio(1);
        lista.insertarAlPrincipio(9);

        System.out.println("Lista actual: ");
        lista.mostrarLista();
    }
}