import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Drawer from "../components/Drawer";
import { StyledEngineProvider } from "@mui/material/styles";
import { useSupabase } from "../components/SupabaseContext";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Checkbox,
} from "@mui/material";
import { Edit, Delete, Add } from "@mui/icons-material";

const UsuariosPage = () => {
  const supabase = useSupabase();
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentUsuario, setCurrentUsuario] = useState(null);
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [apellidoUsuario, setApellidoUsuario] = useState("");
  const [documento, setDocumento] = useState("");
  const [email, setEmail] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [admin, setAdmin] = useState(false);

  const fetchUsuarios = async () => {
    try {
      const { data, error } = await supabase.from("usuario").select("*");
      if (error) throw error;
      setUsuarios(data || []);
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveUsuario = async () => {
    try {
      if (currentUsuario) {
        const { error } = await supabase
          .from("usuario")
          .update({
            nombre: nombreUsuario,
            apellido: apellidoUsuario,
            documento,
            email,
            fecha_nacimiento: fechaNacimiento,
            admin,
          })
          .eq("id", currentUsuario.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("usuario")
          .insert({
            nombre: nombreUsuario,
            apellido: apellidoUsuario,
            documento,
            email,
            fecha_nacimiento: fechaNacimiento,
            admin,
          });
        if (error) throw error;
      }
      setOpenDialog(false);
      fetchUsuarios();
    } catch (error) {
      console.error("Error al guardar el usuario:", error);
    }
  };

  const handleDeleteUsuario = async (id) => {
    try {
      const { error } = await supabase.from("usuario").delete().eq("id", id);
      if (error) throw error;
      fetchUsuarios();
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
    }
  };

  const openDialogHandler = (usuario = null) => {
    setCurrentUsuario(usuario);
    if (usuario) {
      setNombreUsuario(usuario.nombre);
      setApellidoUsuario(usuario.apellido);
      setDocumento(usuario.documento);
      setEmail(usuario.email);
      setFechaNacimiento(usuario.fecha_nacimiento);
      setAdmin(usuario.admin);
    } else {
      setNombreUsuario("");
      setApellidoUsuario("");
      setDocumento("");
      setEmail("");
      setFechaNacimiento("");
      setAdmin(false);
    }
    setOpenDialog(true);
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  return (
    <React.Fragment>
      <Container sx={{ marginTop: 2 }}>
        <StyledEngineProvider injectFirst>
          <Drawer />
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            <Typography variant="h4" gutterBottom>
              Usuarios
            </Typography>
            <IconButton
              color="primary"
              onClick={() => openDialogHandler()}
              aria-label="Agregar nuevo usuario"
            >
              <Add />
            </IconButton>
          </div>
          <TableContainer component={Paper} sx={{ marginTop: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><b>Nombre</b></TableCell>
                  <TableCell><b>Apellido</b></TableCell>
                  <TableCell><b>Email</b></TableCell>
                  <TableCell><b>Documento</b></TableCell>
                  <TableCell align="right"><b>Acciones</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={6} align="center">
                      Cargando usuarios...
                    </TableCell>
                  </TableRow>
                ) : (
                  usuarios.map((usuario) => (
                    <TableRow key={usuario.id}>
                      <TableCell>{usuario.nombre}</TableCell>
                      <TableCell>{usuario.apellido}</TableCell>
                      <TableCell>{usuario.email}</TableCell>
                      <TableCell>{usuario.documento}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          color="primary"
                          onClick={() => openDialogHandler(usuario)}
                        >
                          <Edit />
                        </IconButton>
                        <IconButton
                          sx={{ color: "red" }}
                          onClick={() => handleDeleteUsuario(usuario.id)}
                        >
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>

          <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
            <DialogTitle>
              {currentUsuario ? "Editar Usuario" : "Crear Nuevo Usuario"}
            </DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                label="Nombre"
                fullWidth
                value={nombreUsuario}
                onChange={(e) => setNombreUsuario(e.target.value)}
              />
              <TextField
                margin="dense"
                label="Apellido"
                fullWidth
                value={apellidoUsuario}
                onChange={(e) => setApellidoUsuario(e.target.value)}
              />
              <TextField
                margin="dense"
                label="Documento"
                fullWidth
                value={documento}
                onChange={(e) => setDocumento(e.target.value)}
              />
              <TextField
                margin="dense"
                label="Email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="dense"
                label="Fecha de Nacimiento"
                fullWidth
                type="date"
                value={fechaNacimiento}
                onChange={(e) => setFechaNacimiento(e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
              <div>
                <Checkbox
                  checked={admin}
                  onChange={(e) => setAdmin(e.target.checked)}
                />
                <label>Admin</label>
              </div>
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setOpenDialog(false)}
              >
                Cancelar
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSaveUsuario}
              >
                Guardar
              </Button>
            </DialogActions>
          </Dialog>
        </StyledEngineProvider>
      </Container>
    </React.Fragment>
  );
};

export default UsuariosPage;
