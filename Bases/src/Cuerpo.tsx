export const Cuerpo = () => {

return (<div className="Cuerpo">
    <div className="Cabeza">
        <div className="pestañas"id="derecha" ></div>
        <div className="pestañas" id="derecha_media"></div>
        <div className="pestañas" id="derecha_izquierda"></div>
        <div className="pestañas" id="izquierda"></div>
        <div className="pestañas" id="izquierda_media"></div>
        <div className="pestañas" id="izquierda_derecha"></div>
        <div className="ojos" id="ojo_izquierdo">
            <div className="iris">
                <div className="pupila"></div>
            </div>
        </div>

        <div className="ojos" id="ojo_derecho">
            <div className="iris">
                <div className="pupila"></div>
            </div>
        </div>
        <div className="nariz"></div>
        <div className="boca">
            <div className="cachetes" id="cachete_izquierdo"></div>
            <div className="cachetes" id="cachete_derecho"></div>
            <div className="dientes" id="diente_derecho"></div>
            <div className="dientes" id="diente_izquierdo"></div>
        </div>
        <div className="pecas" id="izquierda_superior"></div>
        <div className="pecas" id="abajo_izquierda"></div>
        <div className="pecas" id="derecha_superior"></div>
        <div className="pecas" id="derecha_abajo_media"></div>
        <div className="pecas" id="bottom_right"></div>
    </div>

    <div className="ropa">
        <div className="Camisa">
            <div className="doble" id="DobleDerecho"></div>
            <div className="Corbata" id="CamisaCorbata"></div>
            <div className="doble" id="DobleIzquierdo"></div>
        </div>

        <div className="Pantalon">
            <div className="Correa"></div>
            <div className="Correa"></div>
            <div className="Corbata"></div>
            <div className="Correa"></div>
            <div className="Correa"></div>
            
        </div>
    </div>
</div>)

}